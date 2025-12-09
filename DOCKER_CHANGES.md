# Docker Configuration Updated for I Lens Project

## ✅ Summary of Changes

All Docker configurations have been updated to reflect the **I Lens I Lens AI Demo** project, removing all references to previous projects (CleanLife, Yemen Mobile, Naba AI, etc.).

---

## 📝 Files Updated:

### 1. **docker-compose.yml** ✅
- **Service name:** Changed from `web` to `ilens-web`
- **Container name:** Set to `ilens-yemen-ai-demo`
- **Port:** Updated from `7097` to `7098`
- **Network:** Changed from `abdulftah-cv-civil_default` (external) to `ilens-network` (bridge)

### 2. **Dockerfile** ✅
- Updated comment from "Build the React app" to "Build I Lens I Lens AI Demo React App"
- Multi-stage build for production (Node 20 → Nginx Alpine)
- Optimized for React/Vite build process

### 3. **Dockerfile.dev** ✅
- Updated comment to reference "I Lens I Lens AI Demo"
- Changed development port from `3000` to `5173` (Vite default)
- Configured for hot-reloading development environment

### 4. **nginx.conf** ✅
- Updated comment from "Naba AI - CleanLife Demo" to "I Lens AI - I Lens Demo"
- Production-ready configuration with:
  - SPA routing support
  - Gzip compression
  - Static asset caching
  - Security headers

### 5. **README-Docker.md** ✅
- Title changed to "I Lens I Lens AI Demo - Docker Setup"
- All port references updated to `7098` (production) and `5173` (development)
- Container names updated to `ilens-yemen-ai-demo` and `ilens-web`
- Image name updated to `ilens-yemen-ai-demo`
- Removed all Yemen Mobile references

### 6. **Application Content** ✅
All CleanLife references removed from:
- `src/lib/translations.ts` - All "CleanLife" replaced with "I Lens"
- `src/components/ContactSection.tsx` - Email updated to `info@ilensai.com`, demo text changed
- `src/components/ChatDemo.tsx` - CleanLife chatbot messages updated to I Lens
- `src/components/CallCenterTransformation.tsx` - All CleanLife capacity/integration text updated

---

## 🚀 How to Use:

### Production Deployment:

```bash
# Build and run
docker-compose up --build -d

# Access the application
http://localhost:7098
```

### Development Mode:

```bash
# Run development server (if configured)
docker-compose --profile dev up --build

# Access the application
http://localhost:5173
```

### Manual Docker Commands:

```bash
# Build image
docker build -t ilens-yemen-ai-demo .

# Run container
docker run -p 7098:80 --name ilens-yemen-ai-demo ilens-yemen-ai-demo

# View logs
docker logs ilens-yemen-ai-demo

# Stop and remove
docker stop ilens-yemen-ai-demo
docker rm ilens-yemen-ai-demo
```

---

## 🔧 Configuration Details:

### Ports:
- **Production (nginx):** 7098 → 80
- **Development (Vite):** 5173

### Network:
- **Name:** `ilens-network`
- **Driver:** bridge
- **Type:** Internal (not external)

### Container:
- **Name:** `ilens-yemen-ai-demo`
- **Restart policy:** unless-stopped
- **Environment:** NODE_ENV=production

---

## 📊 Project Structure:

```
ilense/
├── docker-compose.yml       # Main compose configuration (Port 7098)
├── Dockerfile              # Production build (Nginx)
├── Dockerfile.dev          # Development build (Vite)
├── nginx.conf              # Nginx server config
├── README-Docker.md        # Docker documentation
└── src/
    ├── components/         # All CleanLife references removed
    └── lib/
        └── translations.ts # Updated to I Lens
```

---

## ✅ Verification:

All references to the following have been removed:
- ❌ CleanLife
- ❌ Yemen Mobile  
- ❌ Naba AI (in Docker configs)
- ❌ abdulftah-cv-civil_default network
- ❌ Port 7097

All replaced with:
- ✅ I Lens (عدسات آي لِنس)
- ✅ I Lens AI
- ✅ ilens-network
- ✅ Port 7098

---

## 🎯 Next Steps:

1. **Test the build:**
   ```bash
   docker-compose build
   ```

2. **Run the application:**
   ```bash
   docker-compose up -d
   ```

3. **Verify it's working:**
   ```bash
   curl http://localhost:7098/health
   # Or open http://localhost:7098 in browser
   ```

4. **Check logs:**
   ```bash
   docker-compose logs -f ilens-web
   ```

---

*Last updated: 2025-12-09*
*Project: I Lens I Lens AI Demo*
*Port: 7098*
*Network: ilens-network*
