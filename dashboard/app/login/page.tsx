"use client";
import { useState } from "react";

import { FormControl } from "@/components/ui/form-control";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  return (
    <FormControl
      isInvalid={false}
      className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white m-2"
    >
      <VStack space="xl">
        <Heading className="text-typography-900 leading-3 pt-3">Login</Heading>
        <VStack space="xs">
          <Text className="text-typography-500">Email</Text>
          <Input className="min-w-[250px]">
            <InputField type="text" value={email} onChangeText={setEmail} />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500">Password</Text>
          <Input className="text-center">
            <InputField
              type={showPassword ? "text" : "password"}
              value={password}
              onChangeText={setPassword}
            />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
        </VStack>
        <HStack space="sm">
          <Button
            className="flex-1"
            variant="outline"
            onPress={() => signupMutation.mutate()}
            isDisabled={signupMutation.isPending || loginMutation.isPending}
          >
            {signupMutation.isPending ? (
              <ButtonSpinner />
            ) : (
              <ButtonText>Sign up</ButtonText>
            )}
          </Button>
          <Button
            className="flex-1"
            onPress={() => loginMutation.mutate()}
            isDisabled={loginMutation.isPending || signupMutation.isPending}
          >
            {loginMutation.isPending ? (
              <ButtonSpinner />
            ) : (
              <ButtonText>Sign in</ButtonText>
            )}
          </Button>
        </HStack>
      </VStack>
    </FormControl>
  );
}
