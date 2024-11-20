@echo off

:: Check if node_modules exists in the root
if not exist "node_modules" (
    echo Installing Node modules...
    npm install concurrently
) else (
    echo Node modules already installed.
)

:: Check if client folder exists and install client dependencies
if exist "client" (
    cd client
    if not exist "node_modules" (
        echo Installing client dependencies...
        npm install ^
            @eslint/js@9.14.0 ^
            @fortawesome/fontawesome-svg-core@6.6.0 ^
            @fortawesome/free-solid-svg-icons@6.6.0 ^
            @fortawesome/react-fontawesome@0.2.2 ^
            @types/react-dom@18.3.1 ^
            @types/react@18.3.12 ^
            @vitejs/plugin-react@4.3.3 ^
            autoprefixer@10.4.20 ^
            axios@1.7.7 ^
            chart.js@4.4.6 ^
            eslint-plugin-react-hooks@5.0.0 ^
            eslint-plugin-react-refresh@0.4.14 ^
            eslint-plugin-react@7.37.2 ^
            eslint@9.14.0 ^
            globals@15.12.0 ^
            postcss@8.4.47 ^
            react-chartjs-2@5.2.0 ^
            react-dom@18.3.1 ^
            react@18.3.1 ^
            tailwindcss@3.4.14 ^
            vite@5.4.10
        echo All dependencies installed.
    ) else (
        echo Node modules already installed in the client folder.
    )
    cd ..
) else (
    echo Client folder does not exist.
)

:: Check if server folder exists and install server dependencies
if exist "server" (
    echo Installing Node modules in the server folder...
    cd server
    if not exist "node_modules" (
        echo Installing server dependencies...
        npm install @google/generative-ai @types/express cors dotenv express multer pdf-parse sqlite3
        echo All dependencies installed.
    ) else (
        echo Node modules already installed in the server folder.
    )

    :: Check if .env file exists
    if not exist ".env" (
        set /p api_key="Enter your Gemini API key: "
        echo GEMINI_API_KEY=%api_key% > .env
        echo .env file created with GEMINI_API_KEY.
    ) else (
        echo .env file already exists.
    )
    cd ..
) else (
    echo Server folder does not exist.
)
