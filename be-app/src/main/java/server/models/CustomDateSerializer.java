package server.models;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
   * To format the local date in an appropriate format
   */
 class CustomDateSerializer extends StdSerializer<LocalDate> {
    private static final long serialVersionUID = 1L;
//    private static SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");

    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    protected CustomDateSerializer() {
      this(null);
    }

    public CustomDateSerializer(Class<LocalDate> t) {
      super(t);
    }

  @Override
  public void serialize(LocalDate value, JsonGenerator gen, SerializerProvider provider) throws IOException {
    gen.writeString(formatter.format(value));
  }
}
