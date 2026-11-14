import type { Register, RegisterId } from './types.ts';

export const REGISTERS: Record<RegisterId, Register> = {
	septendecim: { id: 'septendecim', name: 'Septendecim Register', cycle: 17, prefix: 'S-17' },
	tredecim: { id: 'tredecim', name: 'Tredecim Register', cycle: 13, prefix: 'T-13' }
};

/** Registers are always listed Septendecim first. */
export const REGISTER_ORDER: RegisterId[] = ['septendecim', 'tredecim'];

export function cycleOf(register: RegisterId): 17 | 13 {
	return REGISTERS[register].cycle;
}
