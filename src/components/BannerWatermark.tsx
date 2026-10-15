export function BannerWatermark() {
  return (
    <div className="banner-watermark-wrapper" aria-hidden="true">
      <div className="banner-watermark-logo banner-watermark-left">
        <img
          src="/ashvon-logo.png"
          alt=""
          className="banner-watermark-img"
          loading="lazy"
        />
      </div>
      <div className="banner-watermark-logo banner-watermark-right">
        <img
          src="/ashvon-logo.png"
          alt=""
          className="banner-watermark-img"
          loading="lazy"
        />
      </div>
    </div>
  );
}
