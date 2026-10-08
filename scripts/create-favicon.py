#!/usr/bin/env python3
"""Generate a simple favicon.ico for NextLayer."""
import struct
import zlib

def create_png(width, height, rgba_pixels):
    def chunk(chunk_type, data):
        c = chunk_type + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)

    raw = b''
    for y in range(height):
        raw += b'\x00'
        for x in range(width):
            raw += bytes(rgba_pixels[y * width + x])

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(raw)) + chunk(b'IEND', b'')
    return png

def create_ico(png_data, size=32):
    # ICO with embedded PNG
    header = struct.pack('<HHH', 0, 1, 1)
    entry = struct.pack('<BBBBHHII', size, size, 0, 0, 1, 32, len(png_data), 22)
    return header + entry + png_data

w = h = 32
pixels = []
for y in range(h):
    for x in range(w):
        # Purple background with white layers
        if 20 <= y < 23:
            pixels.append((113, 87, 255, 102))
        elif 14 <= y < 17:
            pixels.append((113, 87, 255, 166))
        elif 8 <= y < 11:
            pixels.append((113, 87, 255, 255))
        elif y < 8 and abs(x - 16) < (8 - y):
            pixels.append((80, 53, 229, 230))
        else:
            pixels.append((113, 87, 255, 255))

png = create_png(w, h, pixels)
ico = create_ico(png)

with open('/workspace/public/favicon.ico', 'wb') as f:
    f.write(ico)

print('favicon.ico created')
