import { toast } from "@/hooks/use-toast";

export async function customFetch<T extends object>(route: string, payload: object): Promise<T> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + route, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (response.ok) {
                if (data.message) {
                    toast({
                        title: data.message,
                    })
                }
                resolve(data);
            } else {
                // Gérer les erreurs (ex. : mot de passe incorrect)
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: data.message,
                })
                reject(data)
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Are you connected to the Internet?"
            })
            reject(error)
        }
    })
}