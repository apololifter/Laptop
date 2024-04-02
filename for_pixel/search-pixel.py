import cv2

imagen = cv2.imread('hack-the-box.png')
cv2.imshow('Prueba de imagen',imagen)
cv2.waitKey(0)
cv2.destroyAllWindows