import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import banana from "@/assets/images/banana.png";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={banana} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes</Text>
      <Text style={styles.subtitle}>Jot some stuff down!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/notes")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // backgroundColor: "#f8f9fa",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  centeredContainter: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
