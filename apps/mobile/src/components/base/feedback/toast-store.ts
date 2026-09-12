type ToastVariant = "default" | "success" | "danger";

type ToastEntry = {
    id: string;
    message: string;
    variant: ToastVariant;
};

type Listener = () => void;

let toasts: ToastEntry[] = [];
const listeners = new Set<Listener>();

function emit() {
    listeners.forEach((listener) => listener());
}

export const toastStore = {
    subscribe(listener: Listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    },
    getToasts() {
        return toasts;
    },
    show(message: string, variant: ToastVariant = "default") {
        const id = `${Date.now()}`;
        toasts = [...toasts, { id, message, variant }];
        emit();

        setTimeout(() => {
            toasts = toasts.filter((toast) => toast.id !== id);
            emit();
        }, 3000);
    },
    dismiss(id: string) {
        toasts = toasts.filter((toast) => toast.id !== id);
        emit();
    },
};

/**
 * Imperative toast API — callable from anywhere (event handlers,
 * effects, outside React) without needing a hook or context. Mirrors
 * the pattern used by globalErrorStore (#16).
 */
export const toast = {
    show: (message: string) => toastStore.show(message, "default"),
    success: (message: string) => toastStore.show(message, "success"),
    error: (message: string) => toastStore.show(message, "danger"),
};
