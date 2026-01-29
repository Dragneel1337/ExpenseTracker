import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return <div className="flex justify-center pt-45">{children}</div>;
};
export default AuthLayout;
