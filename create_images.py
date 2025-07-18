# Create simple images with song titles
from PIL import Image, ImageDraw, ImageFont
import os

# Create a basic image with text
def create_song_image(title, artist, output_file):
    # Create an image with a dark blue gradient
    img = Image.new('RGB', (300, 300), color=(30, 30, 60))
    draw = ImageDraw.Draw(img)
    
    # Draw title and artist
    draw.text((150, 150), title, fill=(255, 255, 255))
    draw.text((150, 180), artist, fill=(200, 200, 200))
    
    # Save the image
    img.save(output_file)
    print(f'Created {output_file}')

# Create images for songs
try:
    create_song_image('Night Changes', 'One Direction', 'One_Direction_Night_Changes.png')
    create_song_image('blue', 'Yung Kai', 'Yung_Kai_blue.png')
    print('Images created successfully!')
except Exception as e:
    print(f'Error: {e}')

