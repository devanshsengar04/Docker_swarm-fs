# Step 1: Create .gitignore
@"
**/node_modules
frontend/build
npm-debug.log
Dockerfile~
.dockerignore
.vscode/
.idea/
"@ | Out-File -Encoding UTF8 .gitignore

# Step 2: Create README.md
@"
# Fullstack Docker Swarm App

A fullstack web application deployed using Docker Swarm:
- **Frontend**: React + Nginx
- **Backend**: Node.js + Express
- **Database**: MongoDB with named volume

## 🚀 Features
- Multi-container setup
- Private overlay network
- Persistent MongoDB
- Rolling updates via Swarm

## 🔧 How to Use

```bash
docker swarm init
docker build -t my-frontend ./frontend
docker build -t my-backend ./backend
docker stack deploy -c docker-compose.yml mystack
