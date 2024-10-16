import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Test() {
    return (
        <div className="flex justify-center pt-5">
            <Card>
                <CardHeader>
                    <CardTitle>Hello world!</CardTitle>
                    <CardDescription>This is server side component</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
