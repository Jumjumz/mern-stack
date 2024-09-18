import mongoose from "mongoose";

const LMSCourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        require: true
    },
    courseType: {
        type: String,
        require: true
    },
    courseImage: {
        type: String,
        require: true
    },
    courseWeeksCompletion: {
        type: Number,
        require: true
    },
    coursePages: {
        type: [{
            pageNumber: {
                type: Number,
                require: true
            },
            pageTitle: {
                type: String,
                requre: true
            },
            pageText: {
                type: String,
                require: false
            },
            pageImage: {
                type: String,
                require: false
            },
            pageVideo: {
                type: String,
                require: false
            }

        }],
        require: true
    }
}, {
    timestamps: true
});

const LMSCourse = mongoose.model('LMSCourse' ,LMSCourseSchema);

export default LMSCourse;