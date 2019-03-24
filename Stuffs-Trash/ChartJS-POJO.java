public final class jsonForChartjs {
    public final String type;
    public final Data data;

    @JsonCreator
    public json(@JsonProperty("type") String type, @JsonProperty("data") Data data){
        this.type = type;
        this.data = data;
    }

    public static final class Data {
        public final String[] labels;
        public final Dataset datasets[];

        @JsonCreator
        public Data(@JsonProperty("labels") String[] labels, @JsonProperty("datasets") Dataset[] datasets) {
            this.labels = labels;
            this.datasets = datasets;
        }

        public static final class Dataset {
            public final String label;
            public final int[] data;
            public final String backgroundColor;
            public final long borderWidth;
            public final String borderColor;

            @JsonCreator
            public Dataset(@JsonProperty("label") String label, @JsonProperty("data") int[] data,
                    @JsonProperty("backgroundColor") String backgroundColor,
                    @JsonProperty("borderWidth") long borderWidth, @JsonProperty("borderColor") String borderColor) {
                this.label = label;
                this.data = data;
                this.backgroundColor = backgroundColor;
                this.borderWidth = borderWidth;
                this.borderColor = borderColor;
            }
        }
    }
}