FROM oven/bun:canary

WORKDIR /app

COPY package*.json ./
COPY bun.lock ./

RUN bun install

COPY . .

ENV DATABASE_URL=postgresql://postgres:ansariarif@localhost:5432/postgres

RUN bun run build

EXPOSE 3000

CMD  ["bun", "run", "docker:start"]


