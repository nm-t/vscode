import { DiffHunk, getDiffChangeType, DiffLine, DiffChangeType } from './models/diffHunk';
	let positionInHunk = -1;
		const line = itr.value;
			if (positionInHunk === -1) {
				positionInHunk = 0;
			const matches = DIFF_HUNK_HEADER.exec(line);
			const oriStartLine = oldLine = Number(matches[1]);
			const oriLen = Number(matches[3]) | 0;
			const newStartLine = newLine = Number(matches[5]);
			const newLen = Number(matches[7]) | 0;
			diffHunk = new DiffHunk(oriStartLine, oriLen, newStartLine, newLen, positionInHunk);
			let type = getDiffChangeType(line);
			if (type === DiffChangeType.Control) {
				if (diffHunk.diffLines && diffHunk.diffLines.length) {
					diffHunk.diffLines[diffHunk.diffLines.length - 1].endwithLineBreak = false;
				}
			} else {
				diffHunk.diffLines.push(new DiffLine(type, type !== DiffChangeType.Add ? oldLine : -1,
					positionInHunk,
				let lineCount = 1 + countCarriageReturns(line);
					case DiffChangeType.Context:

		if (positionInHunk !== -1) {
			++positionInHunk;
		for (let i = 0; i < diffHunk.diffLines.length; i++) {
			if (diffHunk.diffLines[i].positionInHunk === diffLineNumber) {
				return diffHunk.diffLines[i];
			positionInDiffHunk = lineInPRDiff - diffHunk.newLineNumber + diffHunk.positionInHunk + 1;
		for (let j = 0; j < diffHunk.diffLines.length; j++) {
			let diffLine = diffHunk.diffLines[j];
				right.push(diffLine.text);
				let codeInFirstLine = diffLine.text;
		let diffLine = getDiffLineByPosition(prPatch, comment.position | comment.original_position);