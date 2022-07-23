import Link from 'next/link';
import { classNames } from '../scripts/tailwind';

interface LinkTextProps {
    text: string;
    to: string;
    className?: string;
    external?: boolean;
}

const getProps = () => {
    return {
        target: '_blank',
        rel: 'noreferrer',
        passHref: true,
    };
};

const LinkText = ({ to, text, className, external }: LinkTextProps) =>
    external ? (
        <a
            className={classNames(
                'text-secondary-normal font-medium',
                className
            )}
            href={to}
            target="_blank"
            rel="noreferrer"
        >
            {text}
        </a>
    ) : (
        <Link href={to}>
            <a
                className={classNames(
                    'text-secondary-normal font-medium',
                    className
                )}
            >
                {text}
            </a>
        </Link>
    );

export default LinkText;
