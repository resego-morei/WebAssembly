# WebAssembly (WASM) Overview
Just like a large company, I had a lot of C++ programs from the past. One of the C++ code I had was one that had to do with calculating the markUp price. So on the following I used it and created a WebAssembly application with C++. Enjoy :)

# Tutorial: Creating a WebAssembly Application with C++

This tutorial demonstrates how to compile and run C/C++ code in WebAssembly using Windows Subsystem for Linux (WSL) and Emscripten. We will create a simple WebAssembly application using C++ and compile it using Emscripten.

## Prerequisites
To successfully complete this tutorial, ensure you have the following set up:
1. Install Visual Studio Code.
2. Install the WSL extension in Visual Studio Code.
3. Install Windows Subsystem for Linux (WSL) and your Linux distribution of choice. This tutorial uses Ubuntu. Remember the Linux user password during installation, as you'll need it for software installation later.

---

## Step-by-Step Guide

### Step 1: Initial Setup

#### Install Emscripten
Emscripten is a compiler toolchain that compiles C and C++ into WebAssembly. To install Emscripten, follow these steps:

1. Clone the Emscripten repository:
    ```bash
    git clone https://github.com/emscripten-core/emsdk.git
    ```
2. Navigate into the repository:
    ```bash
    cd emsdk
    ```
3. Install the latest version of Emscripten:
    ```bash
    ./emsdk install latest
    ```
4. Activate the latest version:
    ```bash
    ./emsdk activate latest
    ```
5. Load the environment variables:
    ```bash
    ./emsdk_env.ps1
    ```

#### Create Your Project Files
1. Create a new directory for your WebAssembly project:
    ```bash
    mkdir wasm_markUP
    ```
2. Navigate into the project directory:
    ```bash
    cd wasm_markUP
    ```
3. Copy the three files on the repo and paste them inside the created project directory.


### Step 2: Compile to WebAssembly

#### 1. Compile Using Emscripten:
To compile `retail_price.cpp` into WebAssembly, use Emscripten with the following command:
```bash
emcc retail_price.cpp -o retail_price.wasm -s EXPORTED_FUNCTIONS="['_calculateRetail']" --no-entry -s STANDALONE_WASM
```

#### 2.	Run Your Application:
To run your application, serve it using a simple HTTP server since the file protocol does not work with WebAssembly:
```bash
python3 -m http.server
```
Open your browser and go to http://localhost:8000 to use the WebAssembly Interest Calculator.

Now you're ready to start building your WebAssembly application using C++!
