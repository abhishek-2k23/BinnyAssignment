import { fetchUserDetails, fetchUsers } from "@/utils/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
const useUsers = () => {
    const [users, setUsers] = useState<any[]>([]);
    
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUserPress = (userId: number) => {
    router.push(`/(users)/${userId}` as any);
  };

  useEffect(() => {
    setLoading(true);
    fetchUserDetails(id as unknown as number).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [id]);
    useEffect(() => {
        setLoading(true);
        fetchUsers().then((data) => {
            console.log('users: ', data);
            setUsers(data);
            setLoading(false);
        });
    }, [])
    return { users, user, loading, handleUserPress };
}
export default useUsers;