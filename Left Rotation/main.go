package main

import "fmt"

func main() {}

func RotationArray(a []int, n int) string {
	var lenArray = len(a)

	if n < 0 || lenArray == 0 {
		return "Not Rotation"
	}

	newArray := make([]int, lenArray)
	forArray := make([]int, lenArray)
	rotation := 0

	copy(newArray[:], a)
	copy(forArray[:], a)

	for rotation < n {
		for index, element := range forArray {
			newIndex := index - 1
			if newIndex < 0 {
				newArray[newIndex+lenArray] = element
			} else {
				newArray[newIndex] = element
			}
		}
		copy(forArray[:], newArray)
		rotation++
	}

	result := fmt.Sprint(newArray)
	return result
}
