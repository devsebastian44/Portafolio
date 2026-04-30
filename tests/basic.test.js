import { describe, it, expect } from 'vitest';

describe('Entorno Base', () => {
  it('debe poder ejecutar pruebas funcionales básicas sin credenciales', () => {
    // Prueba básica para validar que el runner de pruebas funciona
    expect(true).toBe(true);
  });
});
