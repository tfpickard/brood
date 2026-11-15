/**
 * The moderation queue. Each kind of visitor-created record registers a source here. Phase 1 has
 * one source, inquiries to the Provisioner; Phase 2 remarks register a second without changing
 * the queue's routes.
 */
import type { Sql } from '../db/index.ts';
import {
	getInquiry,
	listInquiries,
	removeInquiry,
	setInquiryStatus,
	type Inquiry,
	type InquiryStatus
} from '../inquiries.ts';

export interface ModerationSource<T, S extends string> {
	readonly kind: string;
	readonly label: string;
	list(sql: Sql, status?: S): Promise<T[]>;
	get(sql: Sql, id: string): Promise<T | null>;
	setStatus(sql: Sql, id: string, status: S): Promise<boolean>;
	remove(sql: Sql, id: string): Promise<boolean>;
}

export const inquirySource: ModerationSource<Inquiry, InquiryStatus> = {
	kind: 'inquiry',
	label: 'Inquiries to the Provisioner',
	list: listInquiries,
	get: getInquiry,
	setStatus: setInquiryStatus,
	remove: removeInquiry
};

export const STATUS_LABELS: Record<InquiryStatus, string> = {
	new: 'Unanswered',
	answered: 'Answered',
	set_aside: 'Set aside'
};

export function isInquiryStatus(value: unknown): value is InquiryStatus {
	return value === 'new' || value === 'answered' || value === 'set_aside';
}
