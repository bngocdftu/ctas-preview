import * as React from "react";
export interface BrandMarkProps { href?: string; name?: string; parent?: string; showParent?: boolean; className?: string }
export interface ButtonProps { variant?: "primary" | "brand" | "outline" | "light"; href?: string; type?: "button" | "submit"; block?: boolean; disabled?: boolean; onClick?: (e: React.MouseEvent) => void; className?: string; children: React.ReactNode }
export interface EyebrowProps { onDark?: boolean; className?: string; children: React.ReactNode }
export interface TagProps { active?: boolean; className?: string; children: React.ReactNode }
export interface MediaPlaceholderProps { category?: string; label?: string; className?: string }
export interface NewsCardProps { title: string; date: string; category?: string; excerpt?: string; image?: string | null; href?: string; cta?: string; className?: string }
export interface ProductCardProps { name: string; domain?: string; description: string; points?: string[]; learnHref?: string; introHref?: string; image?: string; highlight?: boolean; className?: string }
export interface ProjectItem { status: string; title: string; description: string; tags?: string[]; image?: string; href?: string }
export interface ProjectGridProps { items: ProjectItem[]; columns?: number; className?: string }
export interface LecturerCardProps { name: string; role?: string; photo?: string; href?: string; className?: string }
export interface TickerItem { date: string; title: string; href?: string }
export interface NewsTickerProps { items: TickerItem[]; label?: string; allHref?: string; allLabel?: string; seconds?: number; className?: string }
export interface StatItem { value: string; label: string }
export interface StatStripProps { items: StatItem[]; className?: string }
export declare const BrandMark: React.FC<BrandMarkProps>;
export declare const Button: React.FC<ButtonProps>;
export declare const Eyebrow: React.FC<EyebrowProps>;
export declare const Tag: React.FC<TagProps>;
export declare const MediaPlaceholder: React.FC<MediaPlaceholderProps>;
export declare const NewsCard: React.FC<NewsCardProps>;
export declare const ProductCard: React.FC<ProductCardProps>;
export declare const ProjectGrid: React.FC<ProjectGridProps>;
export declare const LecturerCard: React.FC<LecturerCardProps>;
export declare const NewsTicker: React.FC<NewsTickerProps>;
export declare const StatStrip: React.FC<StatStripProps>;
