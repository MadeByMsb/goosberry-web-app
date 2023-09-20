import os

# Specify the directory where your images are located
directory = input("Enter The Folder Location Path To Rename The Files : ")
ext = input("Enter The Image Extention (without . ): ")
fname = input("Enter The Name That You Need To Set : ")
# List all files in the directory
files = os.listdir(directory)

# Initialize a counter
counter = 1

# Rename each file
for filename in files:
    # Check if the file is a PNG image
    if filename.endswith("."+ext):
        # Define the new filename
        new_filename = f'{fname} {counter}.{ext}'
        
        # Construct the full file paths
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_filename)
        
        # Rename the file
        os.rename(old_path, new_path)
        
        # Increment the counter
        counter += 1
