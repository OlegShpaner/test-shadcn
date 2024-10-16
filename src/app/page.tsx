import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Button variant="marketplace">
                <Link className="dropdown-item" href="/test" passHref>
                    Go to test
                </Link>
            </Button>
        </div>
    );
}
