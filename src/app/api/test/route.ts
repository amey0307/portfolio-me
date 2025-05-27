export function GET(res: any) {
    try {
        console.log("Test API called");
        return Response.json({ message: "Test API is working!" });
    } catch (error) {
        console.error("Error in test API:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
} 