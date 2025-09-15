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
docker compose build (サービス固有名) --no-cache
docker compose up

# フロントエンド: http://localhost:3001
# GraphQL Playground: http://localhost:3000/graphql

# gRPC 動作確認　コマンド例
grpcurl -plaintext -proto ./proto/task.proto   -d '{"taskId": "1"}'   localhost:5001 task.TaskService/GetTask
grpcurl -plaintext -proto ./proto/task.proto   -d '{"user_id": "1"}'   localhost:5001 task.TaskService/GetTasks

# protoファイルをsnakeCaseで書くとcamelCaseに自動変換（？）ContorolerをcamelCaseで記述しないと動かない

# 9/15記載
# どっちも動く... 不思議
naoki@THOME-PC:/mnt/d/System_coding/schedule_app/backend-task$ grpcurl -plaintext -proto ./proto/task.proto   -d '{"taskId": "1"}'   localhost:5001 task.TaskService/GetTask
{
  "title": "First Task",
  "description": "This is a sample task"
}
naoki@THOME-PC:/mnt/d/System_coding/schedule_app/backend-task$ grpcurl -plaintext -proto ./proto/task.proto   -d '{"task_id": "1"}'   localhost:5001 task.TaskService/GetTask
{
  "title": "First Task",
  "description": "This is a sample task"
}
naoki@THOME-PC:/mnt/d/System_coding/schedule_app/backend-task$
```
 