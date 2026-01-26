"use client";

import { useEffect, useState } from "react";
import GameCard from "@/components/game/GameCard";
import ScrollToRulesButton from "@/components/game/ScrollToRulesButton";
import GameLink from "../navigation/GameLink";

export default function GameClient({
    game,
    relatedGames,
}: {
    game: any;
    relatedGames: any[];
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay =
            Number(sessionStorage.getItem("gameLoadingDelay")) || 1000;

        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.removeItem("gameLoadingDelay");
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    /* ===================== */
    /* LOADING SCREEN */
    /* ===================== */
    if (loading) {
        return (
            <div className="flex h-[70vh] flex-col items-center justify-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#2563EB] border-t-transparent" />
                <p className="text-lg font-semibold animate-pulse">
                    Cargando juego...
                </p>
            </div>
        );
    }

    /* ===================== */
    /* CONTENIDO REAL */
    /* ===================== */

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 space-y-24">

            {/* HERO */}
            <section className="grid gap-12 md:grid-cols-2 border-2 bg-white border-[#000000] p-8 rounded-3xl">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <img
                        src={game.image ?? "/images/placeholder.jpg"}
                        alt={game.name}
                        className="mx-auto max-h-[420px] object-contain"
                    />
                </div>

                {/* INFO */}
                <div>
                    <h1 className="text-4xl font-bold">{game.name}</h1>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-sm">
                            {game.category}
                        </span>
                        <span className="rounded-full bg-[#FEF08A] px-3 py-1 text-sm">
                            Age {game.age}
                        </span>
                        {game.sponsored && (
                            <span className="rounded-full bg-[#FACC15] px-3 py-1 text-sm font-semibold">
                                ⭐ Sponsored
                            </span>
                        )}
                    </div>

                    <p className="mt-6 text-3xl font-bold text-[#2563EB]">
                        ${game.price}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <a
                            href={game.buyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white transition hover:scale-105"
                        >
                            Comprar Ahora
                        </a>

                        <ScrollToRulesButton />
                    </div>

                    <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <InfoCard label="Players" value={game.players} />
                        <InfoCard label="Play time" value={game.duration} />
                        <InfoCard label="Age" value={`${game.age}+`} />
                        <InfoCard label="Category" value={game.category} />
                    </section>
                </div>
            </section>

            {/* DESCRIPTION */}
            <section>
                <h2 className="mb-4 text-2xl font-bold">
                    Descripción del juego
                </h2>
                <p className="text-lg leading-relaxed text-slate-700">
                    {game.description}
                </p>
            </section>

            {/* RULES */}
            <section id="rules">
                <h2 className="mb-6 text-2xl font-bold">
                    ¿Cómo se juega?
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {game.rules.map((rule: string, index: number) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition"
                        >
                            <span className="mb-2 inline-block text-sm font-bold text-[#2563EB]">
                                Step {index + 1}
                            </span>
                            <p>{rule}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* RELATED */}
            {relatedGames.length > 0 && (
                <section>
                    <h2 className="mb-6 text-2xl font-bold">
                        Similar games
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedGames.map((g) => (
                            <GameLink href={`/game/${g.id}`}>
                                <GameCard
                                    key={g.id}
                                    id={g.id}
                                    name={g.name}
                                    category={g.category}
                                    age={g.age}
                                    image={g.image}
                                    sponsored={g.sponsored}
                                    rating={g.rating}
                                /></GameLink>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="rounded-3xl bg-[#2563EB] p-10 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Ready to play?
                </h2>
                <p className="mt-3">
                    Encuentra este juego y empieza a jugar hoy.
                </p>

                <a
                    href={game.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-[#2563EB]"
                >
                    Comprar
                </a>
            </section>
        </div>
    );
}

/* ===================== */
/* Helper */
function InfoCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}
