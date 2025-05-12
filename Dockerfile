FROM node:22

WORKDIR /app

# 백엔드 설정
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# 프론트엔드 설정
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# 소스 코드 복사
COPY . .

# 프론트엔드 빌드
RUN cd frontend && npm run build

# 백엔드 실행
WORKDIR /app/backend
ENV NODE_ENV=production
EXPOSE 5000

CMD ["npm", "start"]
