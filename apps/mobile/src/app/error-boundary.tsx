import { Component, type PropsWithChildren, type ReactNode } from "react";

import { ErrorFallback } from "./error-fallback";
import { reportError } from "./error-reporting";

type ErrorBoundaryState = {
    error: Error | null;
};

type ErrorBoundaryProps = PropsWithChildren<{
    fallback?: (props: { error: Error; onReset: () => void }) => ReactNode;
}>;

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { error: null };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error };
    }

    componentDidCatch(error: Error, info: { componentStack: string }) {
        reportError(error, info);
    }

    reset = () => {
        this.setState({ error: null });
    };

    render() {
        const { error } = this.state;

        if (error) {
            const Fallback = this.props.fallback ?? ErrorFallback;
            return <Fallback error={error} onReset={this.reset} />;
        }

        return this.props.children;
    }
}
