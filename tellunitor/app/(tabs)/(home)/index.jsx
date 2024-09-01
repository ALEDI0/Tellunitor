import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Home</Text>
            <Link
                href={{
                    pathname: '/details/[id]',
                    params: { id: 'bacon' },
                }}>
                View user details
            </Link>
        </View>
    );
}