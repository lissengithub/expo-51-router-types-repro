import { Stack } from "expo-router";

export default function AccountLayout() {
  return (
    <Stack>
      <Stack.Screen name="profile" />
      <Stack.Screen name="other" />
    </Stack>
  );
}
