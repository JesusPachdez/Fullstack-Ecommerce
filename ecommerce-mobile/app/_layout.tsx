import "@/global.css";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart, User, LogOut } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/store/authStore";
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { ActivityIndicator } from "react-native";
import { useState } from "react";

const queryClient = new QueryClient();

export default function RootLayout() {
  const cartItemsNumber = useCart((state: any) => state.items.length);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const isLoggedIn = useAuth((state: any) => !!state.token);
  const logout = useAuth((state: any) => state.logout);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Delay to show full-screen loading state for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    logout();
    setIsLoggingOut(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            headerRight: () => (
              <Link href="/cart" asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={ShoppingCart} size="sm" />
                  <Text>{cartItemsNumber}</Text>
                </Pressable>
              </Link>
            ),
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Shop",
              headerLeft: () =>
                !isLoggedIn ? (
                  <Link href="/login" asChild>
                    <Pressable className="flex-row gap-2">
                      <Icon as={User} size="sm" />
                    </Pressable>
                  </Link>
                ) : (
                  <Button
                    variant="link"
                    size="sm"
                    onPress={handleLogout}
                    className="px-2"
                    isDisabled={isLoggingOut}
                  >
                    <Icon as={LogOut} size="sm" className="mr-1" />
                    <ButtonText>Logout</ButtonText>
                  </Button>
                ),
            }}
          />
          <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
        </Stack>
        {isLoggingOut && (
          <Box
            className="absolute inset-0 bg-black/50 flex items-center justify-center z-50"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            }}
          >
            <VStack space="md" className="items-center">
              <ActivityIndicator size="large" color="#ffffff" />
              <Text className="text-white text-base font-medium">
                Logging out...
              </Text>
            </VStack>
          </Box>
        )}
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
