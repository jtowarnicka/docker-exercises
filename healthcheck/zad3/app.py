import platform

system = platform.system()

if system == "Linux":
    print(f"Witaj w systemie {system}!")
elif system == "Windows":
    print(f"Witaj w systemie {system}!")
else:
    print("Nieznany system operacyjny.")