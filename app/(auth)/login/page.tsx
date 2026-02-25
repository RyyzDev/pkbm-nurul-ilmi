// ============================================================
// Login Page
// ============================================================

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormValues } from "@/validations/auth.schema";
import { useLogin } from "@/queries/auth.queries";
import { useToast } from "@/hooks/use-toast";
import { ROUTES } from "@/constants/routes";
import { Button, Input, Card } from "@/components/ui";

export default function LoginPage() {
    const router = useRouter();
    const login = useLogin();
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (values: LoginFormValues) => {
        login.mutate(values, {
            onSuccess: () => {
                toast.success("Login berhasil!");
                router.push(ROUTES.ADMIN.DASHBOARD);
            },
            onError: (error) => {
                toast.error(error);
            },
        });
    };

    return (
        <div className="w-full max-w-sm">
            <Card elevated padding="lg">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-green-700">
                        PKBM Nurul Ilmi
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Masuk ke panel admin
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input
                        id="email"
                        type="email"
                        label="Email"
                        autoComplete="email"
                        placeholder="admin@pkbmnurulilmi.com"
                        error={errors.email?.message}
                        {...register("email")}
                    />

                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        isLoading={login.isPending}
                    >
                        Masuk
                    </Button>
                </form>
            </Card>
        </div>
    );
}
