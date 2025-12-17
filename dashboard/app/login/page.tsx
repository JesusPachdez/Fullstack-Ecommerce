"use client";
import { useState } from "react";

import { FormControl } from "@/components/ui/form-control";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { handleLogin } from "./actions";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className="flex-1 min-h-screen justify-center items-center">
      <FormControl
        isInvalid={false}
        className="p-4 border rounded-lg max-w-[500px] w-full border-outline-300 bg-white m-2"
      >
        <VStack space="xl">
          <Heading className="text-typography-900 leading-3 pt-3 color-black">
            Login
          </Heading>
          <VStack space="xs">
            <Text className="text-typography-500 color-black">Email</Text>
            <Input className="min-w-[250px]">
              <InputField
                className="color-black"
                type="text"
                value={email}
                onChangeText={setEmail}
              />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500 color-black">Password</Text>
            <Input className="text-center">
              <InputField
                className="color-black"
                type="password"
                value={password}
                onChangeText={setPassword}
              />
            </Input>
          </VStack>
          <HStack space="sm">
            <Button className="flex-1" variant="outline">
              <ButtonText className="color-black">Sign up</ButtonText>
            </Button>
            <Button
              className="flex-1"
              onPress={() => handleLogin(email, password)}
            >
              <ButtonText className="color-black">Sign in</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </FormControl>
    </Box>
  );
}
