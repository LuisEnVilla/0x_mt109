package main

import "testing"

func TestRotationArray(t *testing.T) {
	exampleArray := []int{1, 2, 3, 4, 5}

	assertIsCorrect := func(rotation int, expected string, t *testing.T) {
		t.Helper()
		got := RotationArray(exampleArray, rotation)
		if expected != got {
			t.Errorf("got '%s' expected '%s'", got, expected)
		}
	}
	t.Run("ROTATION 0", func(t *testing.T) {
		assertIsCorrect(0, "[1 2 3 4 5]", t)
	})

	t.Run("ROTATION 1", func(t *testing.T) {
		assertIsCorrect(1, "[2 3 4 5 1]", t)
	})

	t.Run("ROTATION 2", func(t *testing.T) {
		assertIsCorrect(2, "[3 4 5 1 2]", t)
	})

	t.Run("ROTATION 3", func(t *testing.T) {
		assertIsCorrect(3, "[4 5 1 2 3]", t)
	})

	t.Run("ROTATION 4", func(t *testing.T) {
		assertIsCorrect(4, "[5 1 2 3 4]", t)
	})

	t.Run("ROTATION 5", func(t *testing.T) {
		assertIsCorrect(5, "[1 2 3 4 5]", t)
	})
}
