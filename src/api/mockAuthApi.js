export const mockLoginAPI = async (email, password) => {
    console.log("Api: Attempting login");
    await new Promise ((resolve) => setTimeout(resolve, 800));

    if (email === "test@example.com" && password === "password") {
        console.log("Api: Login successful");
        return {
            user: {
                name: "Test User", email }, token : "fake-jwt-token-1234" };
    }

    console.log("Api: Login failed");
    throw new Error("Invalid email or password");
}