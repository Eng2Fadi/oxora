create table if not exists profiles (
  id bigint generated always as identity primary key,
  clerk_user_id text unique not null,
  stripe_customer_id text,
  plan text not null default 'free',
  created_at timestamptz not null default now()
);

create table if not exists subscriptions (
  id bigint generated always as identity primary key,
  clerk_user_id text unique not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  status text not null default 'inactive',
  plan text not null default 'free',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists usage_logs (
  id bigint generated always as identity primary key,
  clerk_user_id text not null,
  module text not null,
  prompt_input text,
  output_excerpt text,
  created_at timestamptz not null default now()
);

create index if not exists usage_logs_user_created_at_idx on usage_logs (clerk_user_id, created_at desc);
