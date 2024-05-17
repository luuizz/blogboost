"use client"
import React, { useState } from "react";
import Container from "../Container";
import Button from "../Globals/button";
import CardPost from "../Globals/card-post";

export default function SectionArticles() {

    // const [visiblePosts, setVisiblePosts] = useState(6);

    return (
        <section className="back-grad py-10 @laptop:py-32 border-b-2 border-gray-scale-500/15">
            <Container>
                <div className="flex flex-col @tablet:flex-row items-center justify-between mb-10">
                    <h2 className="mb-5 @tablet:mb-0">Artigos</h2>
                    <p className="text-gray-scale-600">Lorem ipsum dolor sit amet 🚀</p>
                </div>
                <div className="grid @tablet:grid-cols-2 @laptop:grid-cols-3 gap-y-10 gap-x-8 mb-20">
                    {/* {
                        yourArrayOfPosts.slice(0, visiblePosts).map((post, index) => (
                            <CardPost />
                        ))
                    } */}
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                </div>
                <div className="flex justify-center">
                    <Button text="Carregar mais" onClick={() => setVisiblePosts(visiblePosts + 6)} url="#" />
                </div>
            </Container>
        </section>
    )
}