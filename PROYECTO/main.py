from pytube import YouTube

def descargar_video(url, ruta_destino):
    try:
        # Crear el objeto YouTube
        video = YouTube(url)
        
        # Obtener el flujo de video con la mejor resolución
        stream = video.streams.get_highest_resolution()
        
        # Descargar el video
        print(f"Descargando el video: {video.title}")
        stream.download(ruta_destino)
        print("Descarga completada.")
        
    except Exception as e:
        print(f"Hubo un error: {e}")

# URL del video de YouTube
url_video = 'https://www.youtube.com/watch?v=ID_DEL_VIDEO'

# Ruta donde se descargará el video
ruta_destino = './videos'

# Llamar a la función para descargar el video
descargar_video(url_video, ruta_destino)
