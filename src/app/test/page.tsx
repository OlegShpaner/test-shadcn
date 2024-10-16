import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const fetchPosts = async () => {
    // Fetch data from an external API (or it could be a database, etc.)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Ensure the fetch was successful
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    // Parse the response as JSON
    const posts = await res.json();

    // Limit the number of posts to 5
    return posts.slice(0, 4);
};

export default async function Test() {
    const posts = await fetchPosts();
    return (
        <div className="grid grid-cols-4 gap-4">
            {posts.map((post: {id: string; title: string; body: string}) => (
                <Card key={post.id}>
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>{post.body}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
