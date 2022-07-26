import { classNames } from '../../scripts/tailwind';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
}

const Container = ({ children, className, innerClassName }: ContainerProps) => {
    return (
        <div className={classNames('w-full flex justify-center', className)}>
            <div className={classNames('max-w-7xl w-full', innerClassName)}>
                {children}
            </div>
        </div>
    );
};

export default Container;
