create table if not exists public.projects (
    id bigint generated always as identity primary key,

    title_en text not null,
    title_pt text not null,
    short_description_en text not null,
    short_description_pt text not null,
    full_description_en text not null,
    full_description_pt text not null,

    preview text not null,
    images text[] not null default '{}',

    type text not null check (type in ('Real Project', 'Study Project')),
    category text not null check (category in ('System', 'CMS', 'Landing Page', 'Portfolio', 'Dashboard', 'API', 'Mobile App')),
    technologies text[] not null default '{}',
    features jsonb not null default '[]',
    status text not null check (status in ('In Progress', 'Completed')),

    github_url text,
    live_url text,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists projects_created_at_idx on public.projects (created_at);
