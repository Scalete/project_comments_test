export const getUser = async () => {
    const res = await fetch("http://localhost:3000/api/user", {next:{revalidate:3600}});
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
};