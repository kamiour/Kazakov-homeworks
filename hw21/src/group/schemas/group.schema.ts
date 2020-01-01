// tslint:disable-next-line:no-var-requires
// const mongoose: any = require('mongoose');
import * as mongoose from 'mongoose';

export const groupSchema: any = new mongoose.Schema({
    groupNumber: Number,
    studentId: mongoose.Types.ObjectId,
});

// tslint:disable-next-line:interface-name
export interface Group {
    readonly groupNumber: number;
    readonly studentId: mongoose.Types.ObjectId;
}
