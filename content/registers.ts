import type { Register, RegisterId } from './types.ts';

export const REGISTERS: Record<RegisterId, Register> = {
	septendecim: { id: 'septendecim', name: '17-year book', cycle: 17, prefix: 'S-17' },
	tredecim: { id: 'tredecim', name: '13-year book', cycle: 13, prefix: 'T-13' }
};

/** The 17-year book is always listed first. */
export const REGISTER_ORDER: RegisterId[] = ['septendecim', 'tredecim'];

export function cycleOf(register: RegisterId): 17 | 13 {
	return REGISTERS[register].cycle;
}
