import { Stack } from "expo-router";

const UsersLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="[id]" 
                options={{
                    headerShown: true, 
                    headerTitle: 'User Details', 
                    headerTitleAlign: 'center'
                }}
            />
        </Stack>
    )
}

export default UsersLayout;