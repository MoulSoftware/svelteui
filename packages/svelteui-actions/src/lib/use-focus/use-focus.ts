import type { Action, FocusableElement } from '../_types';

/**
 *
 * @param node HTMLElement that the action is applied to
 */
export function focus(node: FocusableElement): ReturnType<Action> {
	node.focus();

	return;
}
