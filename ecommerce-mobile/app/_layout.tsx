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
import { Button, ButtonText } from "@/components/ui/button";

const queryClient = new QueryClient();

export default function RootLayout() {
  const cartItemsNumber = useCart((state) => state.items.length);

  const isLoggedIn = useAuth((state) => !!state.token);
  const logout = useAuth((state) => state.logout);

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
                    onPress={logout}
                    className="px-2"
                  >
                    <Icon as={LogOut} size="sm" className="mr-1" />
                    <ButtonText>Logout</ButtonText>
                  </Button>
                ),
            }}
          />
          <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
