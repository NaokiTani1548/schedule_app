# Schedule App

NestJS（Microservices + GraphQL）、React、gRPC、Docker を用いたスケジュール管理アプリ。  
BFF を通して GraphQL でクライアントと通信し、gRPC 経由でマイクロサービスと連携

---

## 📁 ディレクトリ構成

```
schedule-app/
├── backend-user/ # NestJS gRPC microservice（ユーザー管理）
├── bff/ # NestJS BFF（GraphQL + gRPC クライアント）
├── frontend/ # React + Apollo Client
└── docker-compose.yml
```

## 🚀 使用技術

| 技術           | バージョン  | 役割                               |
| -------------- | ----------- | ---------------------------------- |
| Node.js        | 20.x        | ランタイム                         |
| NestJS         | v11         | サーバー（BFF + マイクロサービス） |
| React          | 18.x        | フロントエンド UI                  |
| GraphQL        | 16.x        | クライアント ⇔BFF 通信             |
| gRPC           | grpc-js 1.x | BFF⇔ バックエンドサービス通信      |
| Docker Compose | v2.20+      | 開発用コンテナ管理                 |

---

## 開発時メモ

```
docker compose build --no-cache
docker compose up

# フロントエンド: http://localhost:3001
# GraphQL Playground: http://localhost:3000/graphql
```
